import { cloneElement, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }

const GithubCal = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    const selectLastHalfYear = (contributions: Activity[]): Activity[] => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 3;
      
        return contributions.filter(activity => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
      


    return (
        <GitHubCalendar
            username="0xnordian"
            colorScheme="dark"
            blockMargin={5}
            fontSize={16}
            showWeekdayLabels={true}
            style={{ width: '100%' }}
            blockRadius={3}
            transformData={innerWidth > 425 ? undefined : selectLastHalfYear}
            weekStart={1}
            maxLevel={10}
            blockSize={14}
            hideTotalCount={innerWidth > 425 ? false : true}
            hideColorLegend={innerWidth > 425 ? false : true}
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