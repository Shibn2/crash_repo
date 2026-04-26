function withAuth(Wrapper, { adminRoles, Fallback }) {
  return function AuthGuard(props) {
    const { user } = useContext(UserContext);
    const ok = adminRoles.some((role) => user.roles.includes(role));

    if (!ok) {
      return <Fallback />;
    }
    return <Wrapper {...props} />;
  };
}
