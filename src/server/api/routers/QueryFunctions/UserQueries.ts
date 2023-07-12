export const getUserById = async ({ ctx }: any) => {
  const userDetails = await ctx.prisma.user.findUnique({
    where: {
      userId: ctx.userId,
    },
  });

  if (userDetails === null) {
    addUserInDb({ ctx });
  }
  return await userDetails;
};

export const addUserInDb = async ({ ctx }: any) => {
  const addUser = await ctx.prisma.user.create({
    data: {
      userId: ctx.userId,
      admin: false,
    },
  });
  return await addUser;
};
