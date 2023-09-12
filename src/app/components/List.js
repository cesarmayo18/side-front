import ListItem from './ListItem';
const List = () => {
    return (
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <ListItem name={"Cesar Mayo"} email={"cesar.mayo@gmail.com"} value={92347}/>
            <ListItem name={"Cesar Mayo"} email={"cesar.mayo@gmail.com"} value={1233422233}/>
            <ListItem name={"Cesar Mayo"} email={"cesar.mayo@gmail.com"} value={32234}/>
            <ListItem name={"Cesar Mayo"} email={"cesar.mayo@gmail.com"} value={2312}/>
        </ul>
)}
export default List;
