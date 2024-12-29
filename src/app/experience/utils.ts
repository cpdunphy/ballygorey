export function formatDateString(dateString: string) {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  }
  return date.toLocaleDateString('en-US', options)
}
