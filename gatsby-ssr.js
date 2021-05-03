import React from 'react';
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script type="text/javascript" src="https://abc.com/abc/abc0123.js" />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
            <script type="text/javascript">
                var _mtm = window._mtm = window._mtm || [];
                _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.src='https://analytics.rockylinux.org/js/container_ysf00tdi.js'; s.parentNode.insertBefore(g,s);
            </script>
         `,
      }}
    />,
  ]);
}
