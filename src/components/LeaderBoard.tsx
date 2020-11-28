import React, { FC, useEffect, useState } from 'react';

import './LeaderBoard.css';
import { ReactComponent as Flourish } from './svg/pointsdecor.svg';
import Leaderboard from '../api/Leaderboard';
import { useRequests } from '../api/requests';

type LeaderBoardProps = {
    closeHandler: () => void,
    open: boolean
};

const LeaderBoard: FC<LeaderBoardProps> = ({ closeHandler, open }) => {
    const { fetchLeaderboard } = useRequests();
    const [leaderboard, setLeaderboard] = useState<Leaderboard>();

    useEffect(() => {
      fetchLeaderboard()
        .then((response) => {
            setLeaderboard(response.data);
        })
    }, [fetchLeaderboard])

    if (leaderboard === undefined) {
      return null;
    }

    return <aside className={`Leaderboard ${open ? 'open' : ''}`}>
        <button title="Lukk ledertavle" id="CloseLeaderboard" onClick={() => closeHandler()}>
            {/*X-icon svg for close button*/}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#fff" d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" /></svg>
        </button>
        <h2>SNILLE BARN</h2>
        <Flourish className="flourish" />
        <table>
            <thead>
                <tr>
                    <th>LUKER LØST</th>
                    <th>BRUKERNAVN</th>
                </tr>
            </thead>
            <tbody>
                {leaderboard.map(([solved, users]) => (
                  <tr key={solved}>
                    <td>{solved}</td>
                    <td>
                      <ul>
                        {users.map((user) => <li key={user}>{user}</li>)}
                      </ul>
                    </td>
                  </tr>)
                )}
            </tbody>
        </table>
    </aside>;
}

export default LeaderBoard;
