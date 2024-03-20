

const Link = ({ route }) => {
  return (
    <li className=" hover:bg-orange-600 hover:rounded-lg px-6 ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;