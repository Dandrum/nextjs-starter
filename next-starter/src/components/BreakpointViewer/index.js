import style from './BreakpointViewer.module.scss';

const BreakpointViewer = () => {
  return (
    <div className={style.breakpoint}>
      <h2>ACTIVE BREAKPOINTS</h2>
      <div
        className={`${style.breakpoint__entry} ${style['breakpoint__for-phone-only']}`}
      >
        for-phone-only (PHONE_ONLY) (max-w: 639px)
      </div>
      <div
        className={`${style.breakpoint__entry} ${style['breakpoint__from-tablet-portrait-up']}`}
      >
        from-tablet-portrait-up (TABLET_PORTRAIT_UP) (min-w: 640px)
      </div>
      <div
        className={`${style.breakpoint__entry} ${style['breakpoint__from-tablet-landscape-up']}`}
      >
        from-tablet-landscape-up (TABLET_LANDSCAPE_UP) (min-w: 768px)
      </div>
      <div
        className={`${style.breakpoint__entry} ${style['breakpoint__from-desktop-up']}`}
      >
        from-desktop-up (DESKTOP_UP) (min-w: 1024px)
      </div>
      <div
        className={`${style.breakpoint__entry} ${style['breakpoint__from-big-desktop-up']}`}
      >
        from-big-desktop-up (BIG_DESKTOP_UP) (min-w: 1222px)
      </div>
    </div>
  );
};

export default BreakpointViewer;
