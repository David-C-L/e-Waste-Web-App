import NavBar from '../NavBar';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe('NavBar component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>).toJSON()

        expect(tree).toMatchSnapshot()
    })
})