import User, {
  UserProps
} from './User';

// 测试用 props
const defaultValue: Partial < UserProps > = {
  position: [0, 0, 0],
  moveSpeed: 1,
  faceTo: [1, 0, 0]
};
const userPropsOnlyName: UserProps = {
  name: 'xiaoming',
};
const userPropsWithPosition: UserProps = {
  name: 'xiaoming',
  position: [1, 1, 1]
};
const userPropsWithSpeed: UserProps = {
  name: 'xiaoming',
  moveSpeed: 2
};
const userPropsWithAll: UserProps = {
  name: 'xiaoming',
  moveSpeed: 2,
  position: [2, 2, 2],
  faceTo: [1, 1, 1]
};

describe('User 的实例的属性应该正确', () => {
  test('只提供 userName', () => {
    const xiaoMing = new User(userPropsOnlyName);

    expect(xiaoMing.name).toBe(userPropsOnlyName.name);
    expect(xiaoMing.moveSpeed).toBe(defaultValue.moveSpeed);
    expect(xiaoMing.position).toEqual(defaultValue.position);
    expect(xiaoMing.faceTo).toEqual(defaultValue.faceTo);
  });
  test('只提供 moveSpeed', () => {
    const xiaoMing = new User(userPropsWithSpeed);

    expect(xiaoMing.name).toBe(userPropsWithSpeed.name);
    expect(xiaoMing.moveSpeed).toBe(userPropsWithSpeed.moveSpeed);
    expect(xiaoMing.position).toEqual(defaultValue.position);
    expect(xiaoMing.faceTo).toEqual(defaultValue.faceTo);
  });
  test('只提供 position', () => {
    const xiaoMing = new User(userPropsWithPosition);

    expect(xiaoMing.name).toBe(userPropsWithPosition.name);
    expect(xiaoMing.moveSpeed).toBe(defaultValue.moveSpeed);
    expect(xiaoMing.position).toEqual(userPropsWithPosition.position);
    expect(xiaoMing.faceTo).toEqual(defaultValue.faceTo);
  });
  test('提供所有 props', () => {
    const xiaoMing = new User(userPropsWithAll);

    expect(xiaoMing.name).toBe(userPropsWithAll.name);
    expect(xiaoMing.moveSpeed).toBe(userPropsWithAll.moveSpeed);
    expect(xiaoMing.position).toEqual(userPropsWithAll.position);
    expect(xiaoMing.faceTo).toEqual(userPropsWithAll.faceTo);
  })
});

describe('调用 move 方法应该能正确地移动', () => {
  test('采用默认属性时，应该能正确移动', () => {
    const xiaoMing = new User(userPropsOnlyName);
    xiaoMing.move(2);
    expect(xiaoMing.position).toEqual([2, 0, 0]);
  });
  test('斜向 move 应该正确', () => {
    const xiaoMing = new User(userPropsWithAll);

    xiaoMing.move(2);
    expect(xiaoMing.position).toEqual([6, 6, 6]);
  });
});