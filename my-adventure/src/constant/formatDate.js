const formatDate = (mongoDate) => {
    const date = new Date(mongoDate);
  
    if (isNaN(date)) {
      // If the date is not valid, try parsing it as an ISO 8601 date
      const isoDate = new Date(mongoDate?.replace(' ', 'T'));
  
      if (isNaN(isoDate)) {
        // If it's still not valid, return an empty string or an appropriate default value
        return '';
      }
  
      return isoDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatHour = (mongoDate) => {
    const date = new Date(mongoDate);
  
    if (isNaN(date)) {
      // If the date is not valid, try parsing it as an ISO 8601 date
      const isoDate = new Date(mongoDate?.replace(' ', 'T'));
  
      if (isNaN(isoDate)) {
        // If it's still not valid, return an empty string or an appropriate default value
        return '';
      }
  
      return isoDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  export { formatDate , formatHour};