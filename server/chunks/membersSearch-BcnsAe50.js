const searchForMembers = async (prisma, search, filter = {}) => {
  let [firstName, lastName] = [
    void 0,
    void 0
  ];
  if (search.split(" ").length >= 2 && search.split(" ").every((part) => part.length > 0)) {
    [firstName, lastName] = search.split(" ");
  }
  const nickname = search.match(/"(.+)"/)?.[1];
  const studentId = search.match(/(\w{2}\d{4}\w{2}-s)/)?.[1];
  const members = await prisma.member.findMany({
    where: {
      OR: [
        {
          firstName: firstName || !studentId && !nickname ? {
            search: firstName ?? search,
            mode: "insensitive"
          } : void 0
        },
        {
          lastName: lastName || !studentId && !nickname ? {
            search: lastName ?? search,
            mode: "insensitive"
          } : void 0
        },
        {
          nickname: nickname ? {
            search: nickname,
            mode: "insensitive"
          } : void 0
        },
        {
          studentId: studentId ? {
            search: studentId,
            mode: "insensitive"
          } : void 0
        }
      ],
      ...filter
    },
    orderBy: [
      studentId ? {
        _relevance: {
          fields: ["studentId"],
          search: studentId,
          sort: "desc"
        }
      } : {},
      {
        _relevance: {
          fields: ["firstName"],
          search: search.split(" ").filter((part) => part.length > 0).join(" | "),
          sort: "desc"
        }
      },
      {
        _relevance: {
          fields: ["lastName"],
          search: search.split(" ").filter((part) => part.length > 0).join(" | "),
          sort: "desc"
        }
      },
      {
        classYear: "desc"
      }
    ],
    take: 20
  });
  return members;
};

export { searchForMembers as s };
//# sourceMappingURL=membersSearch-BcnsAe50.js.map
