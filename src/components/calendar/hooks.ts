import { useCallback, useState } from "react";
import { month } from "../../constants/calendarConst";



export function useOpenCloseCalendar () {
    const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);

    const handlerButtonCalendar = useCallback(() => setIsOpenCalendar(prev => !prev), [])

    return {isOpenCalendar, handlerButtonCalendar}
} 

export const useGetMonth = () => {
    const nowMonth = Number(new Date().getMonth());
    const nowYear = Number(new Date().getFullYear());
    const [monthValue, setMonthValue] = useState(nowMonth);
    const [yearValue, setYearValue] = useState(nowYear);

    function increaseMonth() {
        if(monthValue + 1 === 12) {
            setYearValue(prev => prev + 1);
            setMonthValue(0);
            return;
        }
        setMonthValue(prev => prev + 1)
    }
    function decreaseMonth() {
        if(monthValue - 1 === -1) {
            setYearValue(prev => prev - 1);
            setMonthValue(11);
            return;
        }
        setMonthValue(prev => prev - 1);
    }
    const arrDays = getMonthDays(monthValue, yearValue)
    return { month : month[monthValue], year: yearValue, increaseMonth, decreaseMonth, arrDays};
}

export const useInputValue = () => {
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");
    const changeChosenDay =  useCallback((day?: number, month?: string, year?: number) => {
        switch (true) {
            case !day:
                setStart("");
                setEnd("");
                break;
            case start !== "" && checkIsStartDateLater(start, `${day} ${month} ${year}`):
                setEnd(start);
                setStart(`${day} ${month} ${year}`);
                break;
            case start !== "": 
                setEnd(`${day} ${month} ${year}`);
                break;
            default:
                setStart(`${day} ${month} ${year}`);
        }
    }, [start])
    return {start, end, changeChosenDay}
}

function getMonthDays(month: number, year: number): number[] {
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDayNum = new Date(year, month, 1).getDay();
    const lastDayNum = new Date(year, month + 1, 0).getDay();
    const numberFirstDay = firstDayNum === 0 ? 7 : firstDayNum;
    const numberLastDay = lastDayNum === 0 ? 7 : lastDayNum;
    const arr: number[] = [];

    for(let i = numberFirstDay; i > 1; i--) {
        arr.push(new Date(year, month, -i + 2).getDate());
    };
    for(let i = 1; i <= lastDay; i++) {
        arr.push(i);
    };
    for(let i = 1; i <= 7 - numberLastDay; i++) {
        arr.push(i);
    };

    return arr;
}

function checkIsStartDateLater(first: string, second: string) {
    return convertForDate(first) > convertForDate(second)
}

export function convertForDate (date: string) {
    const arrDate = date.split(" ");
    return new Date(Number(arrDate[2]), month.findIndex((elem) => elem === arrDate[1]), Number(arrDate[0]));
}