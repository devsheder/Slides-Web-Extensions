
function emitLog(level: 'LOG' | 'INFO' | 'WARN' | 'ERROR', message: string, ...extra: any): void {
    const logs = [
        { level, message, extra, timestamp: new Date().getTime() }
    ];
    fetch('/logs', { method: 'POST', body: JSON.stringify({ logs }) });
}

export const Logger = {
    log(message: string, ...extra: any): void {
        emitLog('LOG', message, extra);
    },
    info(message: string, ...extra: any): void {
        emitLog('INFO', message, extra);
    },
    warn(message: string, ...extra: any): void {
        emitLog('WARN', message, extra);
    },
    error(message: string, ...extra: any): void {
        emitLog('ERROR', message, extra);
    }
}