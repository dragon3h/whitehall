export default function MainSidebar() {
  return (
    <div className="bg-teal-100 row-auto w-60 h-main-height">
      <ul className="flex flex-col">
        <li className="bg-green-300">
          Dashboard
          <ul>
            <li>Whitehall</li>
            <li>Orangehall</li>
            <li>Rent</li>
          </ul>
          </li>
        <li>Applications</li>
        <li>Tables</li>
      </ul>
    </div>
  );
}