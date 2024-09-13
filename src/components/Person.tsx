
type Props = {
    name: string;
    avatar:string;
    roles: string[];
}

export const Person = (props:Props) => {
    const{name,avatar,roles} = props;
    return (
        <div className="p-3"> 
            <h1>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
              
            </ul>
        </div>
    );
}
