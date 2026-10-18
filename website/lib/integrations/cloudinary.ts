// Sellbar.in - Cloudinary Image Optimization & Upload Integration
// Handles high-resolution product imagery and technician inspection photo uploads

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'scale' | 'fit' | 'thumb';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'png' | 'jpg';
}

/**
 * Generate an optimized Cloudinary delivery URL
 */
export function getOptimizedImageUrl(publicIdOrUrl: string, options: CloudinaryTransformOptions = {}): string {
  if (!publicIdOrUrl) return '/placeholder.png';

  // If already an external Unsplash or full CDN URL, return as-is
  if (publicIdOrUrl.startsWith('http://') || publicIdOrUrl.startsWith('https://')) {
    return publicIdOrUrl;
  }

  if (!CLOUDINARY_CLOUD_NAME) {
    return publicIdOrUrl;
  }

  const { width, height, crop = 'fill', quality = 'auto', format = 'auto' } = options;
  const transforms: string[] = [`f_${format}`, `q_${quality}`];

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) transforms.push(`c_${crop}`);

  const transformString = transforms.join(',');
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${publicIdOrUrl}`;
}

/**
 * Server-side upload helper for inspection photos or product images
 */
export async function uploadToCloudinary(
  base64OrFileBuffer: string,
  folder = 'sellbar/inspections'
): Promise<{ success: boolean; url?: string; publicId?: string; isMock?: boolean }> {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    // Development sandbox fallback
    return {
      success: true,
      url: `https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80`,
      publicId: `mock_photo_${Date.now()}`,
      isMock: true,
    };
  }

  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const formData = new FormData();
    formData.append('file', base64OrFileBuffer);
    formData.append('upload_preset', 'sellbar_unsigned');
    formData.append('folder', folder);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return {
      success: res.ok,
      url: data.secure_url,
      publicId: data.public_id,
      isMock: false,
    };
  } catch (err: any) {
    console.error('[Cloudinary Upload Error]:', err?.message);
    return { success: false };
  }
}
