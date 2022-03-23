import { formatISO } from "date-fns/fp";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions, Log } from "../store";

interface LogListProps {
    logs: Log[];
    currentLogIndex: number; 
}

export function LogList({logs,currentLogIndex}:LogListProps) {
    const dispatch = useDispatch();
    const dispatchSelectLog = useCallback(
        (index: number) => () => dispatch(actions.selectLog({index})),
        [dispatch],
    );

    if (logs.length === 0) {
        return <section className="log-list empty">
            No logs yet!
        </section>
    }

    return <section className="log-list">
        { logs.map((log, index) => (
            <LogEntry 
                key={index}
                log={log}
                isSelected={index===currentLogIndex} 
                onSelect={dispatchSelectLog(index)}
            />
        )) }
    </section>
}

function LogEntry({log, isSelected, onSelect}: {log: Log, isSelected: boolean, onSelect: VoidFunction}) {
    const className = `log-entry${isSelected ? ' selected' : ''}`;
    return <a className={className} onClick={onSelect} data-level={log.level}>
        <div className="status">{log.status === 'OK' ? '🔹': '🔴' }</div>
        <div className="level">{log.level}</div>
        <div className="message">{log.message}</div>
        <div className="timestamp">{formatISO(log.timestamp)}</div>
    </a>;
}