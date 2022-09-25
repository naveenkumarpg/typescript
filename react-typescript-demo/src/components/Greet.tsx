type WelcomeProps = {
  name: string;
  messageNumber: number;
  isLogin: boolean;
};

function Greet(props: WelcomeProps) {
  return (
    <div>
      <h2>
        {props.isLogin
          ? `Welcome ${props.name}, you have ${props.messageNumber} messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}

export default Greet;
