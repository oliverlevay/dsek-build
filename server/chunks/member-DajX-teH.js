const getFullName = (member, options = {}) => {
  const truncatedNickname = member.nickname && member.nickname.length > 60 ? member.nickname.substring(0, 57) + "..." : member.nickname;
  if (truncatedNickname && !options.hideNickname) {
    if (member.firstName && member.lastName)
      return `${member.firstName} "${truncatedNickname}" ${member.lastName}`;
    return `"${truncatedNickname}"`;
  }
  if (member.firstName && member.lastName)
    return `${member.firstName} ${member.lastName}`;
  return member.firstName || member.lastName || "No name";
};
const getAuthorName = (author) => {
  if (author.type === "Custom") {
    if (!author.customAuthor)
      throw new Error("CustomAuthor missing in author object of type 'Custom'");
    return author.customAuthor.name;
  }
  if (author.type === "Mandate") {
    if (!author.mandate?.position)
      throw new Error(
        "Mandate and/or Position missing in author object of type 'Mandate'"
      );
    return `${author.mandate.position.name} ${getFullName(author.member)}`;
  }
  if (author.type === "Member") return getFullName(author.member);
  throw new Error(`Unknown author type: ${author.type}`);
};

export { getFullName as a, getAuthorName as g };
//# sourceMappingURL=member-DajX-teH.js.map
