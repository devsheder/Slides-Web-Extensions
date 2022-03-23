import { useMemo } from 'react';
import { Log } from "../store";

interface LogDetailsProps {
    currentLog: Log;
}

export function LogDetails({currentLog}: LogDetailsProps) {
    const strLog = useMemo(() => JSON.stringify(currentLog, undefined, 4), [currentLog]);
    return <div className="log-details"><pre>{strLog}</pre></div>
}