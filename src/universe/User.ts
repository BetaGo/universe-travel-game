export type UserProps = {
  name: string,
  position?: [number, number, number],
  faceTo?: [number, number, number],
  moveSpeed?: number,
};

class User {
  name: string;
  position: [number, number, number];
  faceTo: [number, number, number];
  moveSpeed: number;
  constructor(props: UserProps) {
    this.name = props.name;
    this.position = props.position || [0, 0, 0];
    this.moveSpeed = props.moveSpeed || 1;
    this.faceTo = props.faceTo || [1, 0, 0];
  }
  move(time: number) {
    let movedVector = this.faceTo.map(x => x * this.moveSpeed * time);
    this.position = this.position.map((value, index) => value + movedVector[index]) as [number, number, number];
  }
}

export default User;