export function getMoth(date: Date): string {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const month = months[date.getMonth()];

    return month;
}

export function camelToRegular(camelCaseString: string): string {
    const words = camelCaseString.split(/(?=[A-Z])/);
  
    const regularText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return regularText;
  }