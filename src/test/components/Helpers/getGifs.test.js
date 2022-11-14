import { getGifs } from "../../../Helpers/getGifs";

describe('pruebas con getGifs fecht', () => {
    test('debe traer 10 elementos ', async () => {
        const gifs = await getGifs('batman')
        expect(gifs.length).toBe(10)
    });

    test('si no recibe el argumento no debe retornar nada', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    });
});