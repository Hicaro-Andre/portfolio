export const getExperience = () => {
  const startDate = new Date("2023-08-01");
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();

  const hasCompletedYear =
    now.getMonth() > startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() >= startDate.getDate());

  if (!hasCompletedYear) {
    years--;
  }

  return years;
};