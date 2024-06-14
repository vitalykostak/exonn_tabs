import { classNames } from './classNames'

describe('classNames', () => {
    test('test with only first argument', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('test with additional argument (3-th))', () => {
        const expected = 'someClass additional'
        expect(classNames('someClass', {}, ['additional'])).toBe(expected)
    })

    test('test with mods', () => {
        const expected = 'someClass additional hovered selected'
        expect(classNames('someClass', { hovered: true, selected: true }, ['additional'])).toBe(
            expected
        )
    })

    test('test with mods false', () => {
        const expected = 'someClass additional hovered'
        expect(classNames('someClass', { hovered: true, selected: false }, ['additional'])).toBe(
            expected
        )
    })

    test('test with mods undefined', () => {
        const expected = 'someClass additional hovered'
        expect(
            classNames('someClass', { hovered: true, selected: undefined }, ['additional'])
        ).toBe(expected)
    })
})
