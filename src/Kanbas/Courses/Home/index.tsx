import ModuleList from "../Modules/List";


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ModuleList />
      <h2>Course Status</h2>
      <table>
          <tr>
            <td><button type="button">Publish</button></td>
            <td><button type="button">UnPublish</button></td>
          </tr>
      </table>
      <ul>
          <a href="#">Import Existing Content</a><br/>
          <a href="#">Import From Commons</a><br/>
          <a href="#">Choose Course Page</a><br/>
          <a href="#">View Home Stream</a><br/>
          <a href="#">New Announcement</a><br/>
          <a href="#">New Analytics</a><br/>
          <a href="#">View Course Notifications</a>
        </ul>
        <h2>Comming Up</h2>
        <a href="#">View Calender</a>
        <ul>
          <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45 am</a><br/>
          <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:35 am</a><br/>
          <a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
        </ul>
    </div>
  );
}
export default Home;