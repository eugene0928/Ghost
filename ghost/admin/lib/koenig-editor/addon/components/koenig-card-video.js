import Component from '@glimmer/component';
import {inject as service} from '@ember/service';

export default class KoenigCardVideoComponent extends Component {
    @service config;
    @service feature;
    @service store;
    @service membersUtils;
    @service ui;
}
