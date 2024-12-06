export default function sleep(ms = 1000): Promise<void> {
  return new Promise<void>((r) => setTimeout(() => r(), ms));
}
