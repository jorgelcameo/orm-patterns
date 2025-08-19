// plain-object
class User {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string
  ) {}
}

// repository-collection
interface UserRepositoryInterface {
  add(user: User): User | undefined;
  findById(id: number): User | undefined;
  findAll(): User[];
}

// repository
class UserRepository implements UserRepositoryInterface {
  private readonly users: User[] = [];

  add(user: User): User | undefined {
    this.users.push(user);
    return this.users[this.users.length - 1];
  }

  findById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  findAll(): User[] {
    return this.users;
  }
}

// service
class UserService {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  create(user: User): User | undefined {
    return this.userRepository.add(user);
  }
}

export const run = () => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);

  const user = new User(1, 'John Doe', 'john.doe@example.com');
  console.log(userService.create(user));
};
