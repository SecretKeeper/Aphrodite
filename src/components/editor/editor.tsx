import { h, Component, Fragment } from 'preact';
import render from 'preact-render-to-string';
/* @ts-ignore */
import { init, exec } from 'pell';
import {
  BoldSVG,
  UnderlineSVG,
  ItalicSVG,
  StrikethroughSVG,
  QuoteSVG,
  NumberedListSVG,
  BulletedListSVG,
  CodeSVG,
  SeparatorSVG,
  ImageSVG,
  LinkSVG,
} from '../icons';

class Editor extends Component {
  editor = null;

  state = {
    html: '',
  };

  componentDidMount() {
    this.editor = init({
      element: document.getElementById('LunaEditor'),
      onChange: (html: any) => this.setState({ html }),
      classes: {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content',
        selected: 'pell-button-selected',
      },
      actions: [
        {
          name: 'bold',
          icon: render(<BoldSVG width={14} height={14} />),
        },
        {
          name: 'underline',
          icon: render(<UnderlineSVG width={14} height={14} />),
        },
        {
          name: 'italic',
          icon: render(<ItalicSVG width={12} height={12} />),
        },
        {
          name: 'strikethrough',
          icon: render(<StrikethroughSVG width={16} height={16} />),
        },
        {
          name: 'quote',
          icon: render(<QuoteSVG width={20} height={20} />),
        },
        {
          name: 'olist',
          icon: render(<NumberedListSVG width={17} height={17} />),
        },
        {
          name: 'ulist',
          icon: render(<BulletedListSVG width={17} height={17} />),
        },
        {
          name: 'code',
          icon: render(<CodeSVG width={20} height={20} />),
        },
        {
          name: 'line',
          icon: render(<SeparatorSVG width={20} height={20} />),
        },
        {
          name: 'image',
          icon: render(<ImageSVG width={20} height={20} />),
          result: () => {
            const url = window.prompt('Enter the image URL');
            if (url) exec('insertImage', url);
          },
        },
        {
          name: 'link',
          icon: render(<LinkSVG width={20} height={20} />),
          result: () => {
            const url = window.prompt('Enter the link URL');
            if (url) exec('createLink', url);
          },
        },
      ],
    });
  }

  render() {
    return (
      <Fragment>
        <div className={'submit-wrapper'}>
          <div className={'bg-white border border-b-transparent border-hex-{ebebeb} p-0'} id="LunaEditor" />
          <div className={'flex items-center bg-white border border-t-transparent border-hex-{ebebeb} px-8 py-6'}>
            <label className="flex items-center text-sm" for="anonymously">
              <input className="mr-2  " id="anonymously" type="checkbox" />
              <span className="select-none">Send Anonymously</span>
            </label>
            <button class="uppercase text-xs font-semibold bg-hex-072be5 text-white rounded-sm ml-auto px-5 py-2">
              send
            </button>
          </div>
        </div>
        <p>{this.state.html}</p>
      </Fragment>
    );
  }
}

export default Editor;
