export class Interest {
  id?: number;
  homeId?: number;
  userId?: number;
  userProp?: number;

  static toJson(interest: Interest): any {
    return {
      id: interest.id,
      homeId: interest.homeId,
      userProp: interest.userProp,
      userId: interest.userId,

    }
  }

}
