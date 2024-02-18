import * as React from 'react'
import Layout from './Layout'
import background from '../../assets/images/kimjongun.jpg'
const KimJongUn = () => {
  return (
    <div
      style={{
        // background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout
        level={6}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: 'white',
          boxBackgroundColor: '#76453B',
          leaderboardHeaderColor: 'white',
          iconColor: 'white',
          leaderboardPositionColor: '#CCD3CA',

          hintTextColor: 'white',
          leaderboardColor: '#76453B',
          leaderboardTextColor: 'black',
        }}
      ></Layout>
    </div>
  )
}

export default KimJongUn
