import { Table } from "react-bootstrap";
export default function seller() {
  const players = [
    {
      teamid: "1",
      playername: "Bhuvneshwar Kumar",
      playerage: "31",
      role: "bowler",
    },
    {
      teamid: "1",
      playername: "Mitchell Marsh",
      playerage: "31",
      role: "All rounder",
    },
    {
      teamid: "2",
      playername: "MS.Dhoni",
      playerage: "35",
      role: "Wicket-keeper",
    },
    {
      teamid: "1",
      playername: "Kane Williamson",
      playerage: "31",
      role: "batsman",
    },
    {
      teamid: "2",
      playername: "Ambati Rayudu",
      playerage: "36",
      role: "Batsman",
    },
    {
      teamid: "2",
      playername: "Ravindra Jadeja",
      playerage: "33",
      role: "Bowler",
    },
    {
      teamid: "3",
      playername: "Virat Kohli",
      playerage: "32",
      role: "batsman",
    },
    {
      teamid: "3",
      playername: "Mohammed Siraj",
      playerage: "27",
      role: "bowler",
    },
    {
      teamid: "3",
      playername: "AB de Villiers",
      playerage: "37",
      role: "batsman",
    },
    {
      teamid: "4",
      playername: "Rohit Sharma",
      playerage: "34",
      role: "batsman",
    },
    {
      teamid: "4",
      playername: "Hardik Pandya",
      playerage: "28",
      role: "All-rounder",
    },
    {
      teamid: "4",
      playername: "Jasprit Bumrah",
      playerage: "28",
      role: "bowler",
    },
    {
      teamid: "5",
      playername: "Dinesh Karthik",
      playerage: "36",
      role: "Wicket-keeper",
    },
    {
      teamid: "5",
      playername: "Venkatesh Iyer",
      playerage: "26",
      role: "All-rounder",
    },
    {
      teamid: "5",
      playername: "Eoin Morgan",
      playerage: "35",
      role: "Batsman",
    },
    {
      teamid: "6",
      playername: "Rishabh Pant",
      playerage: "24",
      role: "Wicket-keeper",
    },
    {
      teamid: "6",
      playername: "Steve Smith",
      playerage: "32",
      role: "Batsman",
    },
    {
      teamid: "6",
      playername: "Ravichandran Ashwin",
      playerage: "35",
      role: "Bowler",
    },
    {
      teamid: "7",
      playername: "Sanju Samson",
      playerage: "27",
      role: "Wicket-keeper",
    },
    {
      teamid: "7",
      playername: "Liam Livingstone",
      playerage: "28",
      role: "All-rounder",
    },
    {
      teamid: "7",
      playername: "Ben Stokes",
      playerage: "30",
      role: "All-rounder",
    },
    {
      teamid: "8",
      playername: "KL Rahul",
      playerage: "29",
      role: "Wicket-keeper",
    },
    {
      teamid: "8",
      playername: "Mayank Agarwal",
      playerage: "30",
      role: "Batsman",
    },
    {
      teamid: "8",
      playername: "Aiden Markram",
      playerage: "27",
      role: "Batsman",
    },
  ];

  return (
    <div className="container">
      <center>
        <h1>IPL 2020 Team List</h1>
      </center>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>teamid</th>
            <th>playername</th>
            <th>playerage</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {players.map((players, index) => (
            <tr key={index}>
              <td>{players.teamid}</td>

              <td>{players.playername}</td>

              <td>{players.playerage}</td>
              <td>{players.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
