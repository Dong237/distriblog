'use client'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { useState } from 'react'

const theme = {
  plain: {
    color: '#e4e4e7',
    backgroundColor: '#18181b',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#71717a' } },
    { types: ['punctuation'], style: { color: '#a1a1aa' } },
    { types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'], style: { color: '#f472b6' } },
    { types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'], style: { color: '#a5f3fc' } },
    { types: ['operator', 'entity', 'url', 'variable'], style: { color: '#fcd34d' } },
    { types: ['atrule', 'attr-value', 'function', 'class-name'], style: { color: '#67e8f9' } },
    { types: ['keyword'], style: { color: '#c4b5fd' } },
    { types: ['regex', 'important'], style: { color: '#fcd34d' } },
  ],
}

export function LiveCode({ code, scope = {}, noInline = false }) {
  return (
    <div className="live-code-container" style={{ marginBlock: '1.5rem' }}>
      <LiveProvider code={code} scope={{ useState, ...scope }} theme={theme} noInline={noInline}>
        <div style={{
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #27272a'
        }}>
          <div style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#27272a',
            fontSize: '0.75rem',
            color: '#a1a1aa',
            fontFamily: 'monospace'
          }}>
            Live Editor - Edit the code below
          </div>
          <LiveEditor
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.875rem',
              padding: '1rem',
            }}
          />
        </div>
        <LiveError style={{
          color: '#ef4444',
          padding: '0.75rem',
          backgroundColor: '#1c1917',
          borderRadius: '8px',
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          fontFamily: 'monospace'
        }} />
        <div style={{
          marginTop: '1rem',
          padding: '1.5rem',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid #e4e4e7'
        }}>
          <div style={{
            fontSize: '0.75rem',
            color: '#71717a',
            marginBottom: '0.75rem',
            fontFamily: 'monospace'
          }}>
            Preview
          </div>
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  )
}

export default LiveCode
