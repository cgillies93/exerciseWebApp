import React, { Component } from 'react';
import './WorkoutPage.css';

class WorkoutPage extends Component {
  render() {
    const { match } = this.props;
    const url = match.url;
    const workout = url.split('/')[2];
    console.log(workout);

    return(
      <div className='workout-page-wrapper'>
        <div className='workout-images'>
        </div>
        <h1>{workout}</h1>
        <section className='workout-summary-wrapper'>
          <h2>Summary</h2>
          <table className='workout-summary-table'>
            <tbody>
              <tr className='workout-summary-header-row'>
                <th>Type</th>
                <th>Level</th>
                <th>Time</th>
                <th>Equipment</th>
              </tr>
              <tr>
                <td>Full Body</td>
                <td>Intermediate</td>
                <td>{'90'} minutes</td>
                <td>Gym</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='workout-description-wrapper'>
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget ornare dolor. Etiam quis blandit nisl. Cras faucibus iaculis pulvinar. Integer mauris lorem, molestie id lectus in, vulputate aliquet magna. Nunc vitae mauris semper arcu commodo molestie. Vestibulum vestibulum, tortor et molestie aliquam, erat sem porta nunc, et congue arcu dolor eu leo. Donec tempor felis tellus, at vulputate sem ultrices porttitor.</p>
        </section>
      </div>
    );
  }
}

export default WorkoutPage;
