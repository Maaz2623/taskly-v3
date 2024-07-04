declare type CreateUserParams = {
  clerkId: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
};

declare type CreateTaskParams = {
  title: string;
  description: string;
  time: string;
  userId: string | null;
};
