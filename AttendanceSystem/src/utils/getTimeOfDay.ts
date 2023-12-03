export const getTimeOfDay = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return 'Morning';
  } else if (currentHour >= 12) {
    return 'Evening';
  }
};
