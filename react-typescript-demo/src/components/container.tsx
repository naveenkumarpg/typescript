type ContainerProps = {
  style: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      This el is container
    </div>
  );
};
