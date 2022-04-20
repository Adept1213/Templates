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
    const [value, setValue] = useState<string>("");
    const changeChosenDay =  useCallback((day: number, month: string, year: number) => {
        setValue(`${day} ${month} ${year}`);
    }, [])
    return {value, changeChosenDay}
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