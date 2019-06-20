import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount

//downcode fixes Slick Slider dependencies error mesage
window.matchMedia = window.matchMedia || function() {
    return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
    };
    };