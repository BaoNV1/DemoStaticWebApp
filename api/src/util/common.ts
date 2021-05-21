export default class Common {

    static changeStringToArray = (str: string) => {
        let result: string[][];
        result = [];
        if (str) {
            const items = str.split(",");
            for (let x = 0; x < items.length; x++) {
                result[x] = [];
                const item = items[x].split(":");
                if (item[0]) {
                    result[x] = item;
                }
            }
        }
        return result;
    }
}