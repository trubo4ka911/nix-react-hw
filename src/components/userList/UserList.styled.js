import styled from "@emotion/styled";

export const ProfileUser = styled.div`
  display: block;
  width: 200px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-align: center;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  padding-bottom: 24px;
  margin: 20px auto;
`;

export const Avatar = styled.img`
  width: 150px;
  margin: auto;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`;
export const FriendsItem = styled.li`
  flex-direction: column;
  padding-top: 24px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-align: center;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  padding-bottom: 24px;
  margin: 20px 0 30px 20px;
  list-style-type: none;
`;
