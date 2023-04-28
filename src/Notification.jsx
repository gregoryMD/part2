export default function Notification({ message }) {
  if (message === null) {
    return null;
  }

  const messageStyle = {
    order: "-1",
    color: "rgb(255, 99, 80)",
    background: "rgb(244, 245, 240)",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  return <div style={messageStyle}>{message}</div>;
}
