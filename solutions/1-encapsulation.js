// BEGIN
export const getMutualFriends = (firstUser, secondUser) => {
    const result = [];
    firstUser.getFriends().forEach((friendOfFirstUser) => {
      secondUser.getFriends().forEach((friendOfSecondUser) => {
        if (friendOfFirstUser.id === friendOfSecondUser.id)
          result.push(friendOfFirstUser);
      });
    });
    return result;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});