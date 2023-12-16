import { cloneElement } from 'react'
import GitHubCalendar from 'react-github-calendar'

const GithubCal = () => {
    return (
        <GitHubCalendar
            username="0xnordian"
            colorScheme="dark"
            blockMargin={5}
            fontSize={16}
            showWeekdayLabels={true}
            style={{ width: '100%' }}
            blockRadius={3}
            // transformData={(data: any) => {data.forEach((d: any) => {d.count = 0;}); return data;} }
            weekStart={1}
            maxLevel={10}
            blockSize={14}
            // theme={{
            //     light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
            //     dark: [
            //         'rgba(15, 184, 123, 0.1)',
            //         'rgba(15, 184, 124, 0.3)',
            //         'rgba(15, 184, 125, 0.6)',
            //         'rgba(15, 184, 126, 0.8)',
            //         'rgba(15, 184, 127, 1)',
            //     ],
            // }}
            renderBlock={(block, activity) =>
                cloneElement(block, {
                    children: (
                            <title>{`${activity.count} commits on ${activity.date}`}</title>
                    ),
                })
            }
        />
    )
}

export default GithubCal