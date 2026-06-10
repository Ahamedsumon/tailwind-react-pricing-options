const Link = ({ route }) => {
  return (
    <li className="lg:mr-10 px-2 py-1 hover:bg-gray-300">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
