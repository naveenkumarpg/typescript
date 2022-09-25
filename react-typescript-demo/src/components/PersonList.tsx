import { Human } from './Human';

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return <Human key={index} name={name} />;
      })}
    </div>
  );
};
