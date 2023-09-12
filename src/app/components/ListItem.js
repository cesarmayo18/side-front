const ListItem = ({ name, email, value }) => {
  return (
      <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/proxy/o63B_1KDVnQpCF4cfv4Hoq9AcIeI6ZNXrWys1a1DZAZh7Sg_6lhz1ndsYjWYPona0WIdpejNRv6aa4fxxVUEq6Mti2sNh50Ypw6Gc6FA0LU5slcSkbxMIxy6xDg_KrUi-l18"
                       alt="Neil image"></img>
              </div>
              <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {email}
                  </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${value}
              </div>
          </div>
      </li>
  );
}
export default ListItem;