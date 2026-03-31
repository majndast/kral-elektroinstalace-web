import { type ClassValue, clsx } from "clsx";

// Simple className merger (we're not using tailwind-merge to keep it light)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format phone number for display
export function formatPhone(phone: string): string {
  return phone.replace(/(\+420)(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement, threshold = 0.1): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
}

// Debounce function
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function
export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Generate gradient for savings chart
export function getEnergyGradient(percentage: number): string {
  if (percentage >= 80) return "var(--red-accent)";
  if (percentage >= 50) return "var(--yellow-primary)";
  return "var(--green-accent)";
}

// Clamp number between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Linear interpolation
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

// Map value from one range to another
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
