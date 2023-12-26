const Today = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const today = `${year}-${month}-${day}`;
    return today ;
}
export default Today;